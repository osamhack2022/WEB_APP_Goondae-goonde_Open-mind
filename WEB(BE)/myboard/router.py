# location app router
# read locaton_db, write default DB, relation allow, No migrate
class LocationRouter:

    route_app_labels = {'locations'}

    def db_for_read(self, model, **hints):
        if model._meta.app_label in self.route_app_labels:
            return 'locations_db'
        return None

    def db_for_write(self, model, **hints):
        if model._meta.app_label in self.route_app_labels:
            return 'default'
        return None

    def allow_relation(self, obj1, obj2, **hints):
        if (
            obj1._meta.app_label in self.route_app_labels or
            obj2._meta.app_label in self.route_app_labels
        ):
           return True
        return None

    def allow_migrate(self, db, app_label, model_name=None, **hints):
        return None