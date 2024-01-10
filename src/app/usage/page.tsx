import { Button } from "@/components/ui/button";

const Usage = () => {
  return (
    <div className="min-h-[70vh] min-w-screen lg:mx-[7rem] lg:px-[1.5rem] px-[0.5rem] flex flex-col items-center pt-10 space-y-4">
      <div className="w-full">
        <h2 className="text-[1.8rem] fontsemi-bold">
          eSIM Status and Usage Check
        </h2>
        <p>You can see your data usage directly from your phone settings.</p>
      </div>
      <div className="w-full">
        <p>Alternatively, enter your order number:</p>
        <div className="flex flex-col sm:flex-row  w-full sm:space-x-2 space-y-2 sm:space-y-0">
          <input
            className="w-full rounded-md border-2 border-btnblue outline-none px-6 focus:shadow-sm py-2 focus:shadow-btnblue"
            placeholder="MM-12345"
          />
          <Button className="bg-btnblue hover:bg-hoverbtnblue " size="lg">
            Check
          </Button>
        </div>
        <p>No data found for this order</p>
      </div>
    </div>
  );
};

export default Usage;
