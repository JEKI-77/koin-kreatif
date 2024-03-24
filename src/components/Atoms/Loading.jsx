import { Button, Spinner } from "flowbite-react";

const Loading = () => {
  return (
    <div className="flex flex-row gap-3">
      <Button color="blue">
        <Spinner aria-label="Spinner  button example" size="sm" />
        <span className="pl-3">Loading...</span>
      </Button>
    </div>
  );
};

export default Loading;
