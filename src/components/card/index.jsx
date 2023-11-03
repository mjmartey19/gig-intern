
function Card(props) {
  const { variant, extra, children, ...rest } = props;
  
  return (
    <div
      className={`!z-5 relative flex flex-col rounded-[10px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-bluee-600 dark:text-white dark:shadow-none ${extra}`}
      {...rest}
    >
      {children}
    </div>
  );
}

export default Card;
