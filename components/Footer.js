export default function Footer() {
  return (
    <div className="fixed right-0 bottom-0 z-40 flex w-full justify-end pb-28">
      <div className="flex w-1/2 items-baseline justify-end">
        <div className="flex w-2/3 flex-col items-end">
          <div className="h-1 w-2/5 bg-primary-light" />
          <div className="mt-1 h-1 w-full bg-primary-light" />
          <div className="mt-1 h-1 w-2/3 bg-primary-light" />
        </div>
      </div>
    </div>
  );
}
