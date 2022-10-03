import re
from django.core import validators
from django.utils.deconstruct import deconstructible
from django.utils.translation import gettext as _

@deconstructible
class CustomASCIIUsernameValidator(validators.RegexValidator):
    regex = r'^[\w]+$'
    message = _(
        'Please enter a vliad username. You input something wrong.'
    )