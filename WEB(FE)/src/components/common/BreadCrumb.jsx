const BreadCrumb = ({ category, crumb }) => {
  return (
    <div className='text-sm breadcrumbs text-gray-900 dark:text-gray-100'>
      <ul>
        <li>{category}</li>
        <li>{crumb}</li>
      </ul>
    </div>
  );
};

export default BreadCrumb;
