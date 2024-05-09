import { Button, Spinner } from "flowbite-react";

const Loading = () => {
  return (
    <div className="flex flex-row gap-3 ">
      <Button color="gray">
        <Spinner aria-label="Alternate spinner button example" size="sm" />
        <span className="pl-3 text-black ">Loading...</span>
      </Button>
    </div>
  );
};

export default Loading;
