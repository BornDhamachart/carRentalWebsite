import Image from "next/image";
import { CarProps } from "@/types";
import { useGenerateCarImageUrl } from "@/hooks/useGenerateCarImageUrl";
import { Modal } from "antd";

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
  return (
    <>
      <Modal
        open={isOpen}
        footer={null}
        onCancel={() => {
          closeModal();
        }}
        centered
      >
        <div className="flex-1 flex flex-col gap-3 mt-6">
          <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg flex justify-center pt-6">
            <Image
              src={useGenerateCarImageUrl(car)}
              alt="car model"
              width={250}
              height={40}
            />
          </div>

          <div className="flex gap-3">
            <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg pt-2">
              <Image
                src={useGenerateCarImageUrl(car, "29")}
                alt="car model"
                width={250}
                height={40}
              />
            </div>
            <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg pt-6">
              <Image
                src={useGenerateCarImageUrl(car, "33")}
                alt="car model"
                width={250}
                height={40}
              />
            </div>
            <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg pt-2">
              <Image
                src={useGenerateCarImageUrl(car, "13")}
                alt="car model"
                width={250}
                height={40}
              />
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-2">
          <h2 className="font-semibold text-xl capitalize">
            {car.make} {car.model}
          </h2>

          <div className="mt-3 flex flex-wrap gap-4">
            {Object.entries(car).map(([key, value]) => (
              <div className="flex justify-between w-full" key={key}>
                <h4 className="text-grey capitalize w-1/2">{key}</h4>
                <p className="text-black-100 font-semibold capitalize w-1/2 text-left">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CarDetails;
