function Dialog(props: any) {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 w-full bg-[rgba(0,0,0,.8)]">
      <dialog className="p-8 rounded absolute top-0 bottom-0" open={true}>
         {props.children}
      </dialog>
    </div>
  );
}

export default Dialog;
