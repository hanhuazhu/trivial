const Tooltip = (props) => {
  const content = props.value;

  return (
    <div className={`pointer-events-none absolute ${props.position} opacity-0
      transition-opacity group-hover:opacity-100 text-sm rounded-md px-2 py-1
      bg-neutral-100 text-center font-medium text-black`}>
      { content }
    </div>
  );
}

export default Tooltip;