"use client";
import { roomsSchema } from "@/_schema/roomregisterschema";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  GuestChildrenPetsCount,
  Prices,
  RoomsData,
  bedsPillowsBedSheetCount,
  minMaxDaysToStayCount,
} from "@/jsondata/roomregister";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

import { useForm } from "react-hook-form";
import { z } from "zod";

const Rooms = () => {
  const onSubmit = (values: z.infer<typeof roomsSchema>) => {
    console.log(values);
  };

  const [priceForChildrenDisabled, setPriceForChildrenDisabled] =
    useState(true);
  const [priceForPetsDisabled, setPriceForPetsDisabled] = useState(true);

  const form = useForm<z.infer<typeof roomsSchema>>({
    resolver: zodResolver(roomsSchema),
    defaultValues: {
      floorNumber: "",
      roomNo: "",
      beds: 0,
      pillows: 0,
      bedSheets: 0,
      minDaysToStay: 1,
      maxDaysToStay: 1,
      maximumGuest: 1,
      maximumChildren: 0,
      maximumPets: 0,
      pricePerGuest: 0,
      pricePerChildren: 0,
      pricePerPets: 0,
    },
  });

  //handling the button click
  const handleButtonClick = ({
    name,
    value,
    type,
  }: {
    name: string;
    value: number;
    type: string;
  }) => {
    switch (name) {
      case "minDaysToStay":
        if (type === "decrease") {
          if (value > 1) {
            form.setValue(name as any, value - 1);
          }
        } else {
          form.setValue(name as any, value + 1);
          const maxDays = form.getValues("maxDaysToStay");
          if (maxDays <= value) {
            form.setValue("maxDaysToStay", value + 1);
          }
        }
        break;
      case "maxDaysToStay":
        if (type === "decrease") {
          const minDays = form.getValues("minDaysToStay");
          if (value > minDays) {
            form.setValue(name as any, value - 1);
          }
        } else {
          form.setValue(name as any, value + 1);
        }
        break;
      case "maximumGuest":
        if (type === "decrease") {
          if (value > 1) {
            form.setValue(name as any, value - 1);
          }
        } else {
          form.setValue(name as any, value + 1);
        }
        break;
      case "maximumChildren":
        if (type === "increase") {
          setPriceForChildrenDisabled(false);
          form.setValue(name as any, value + 1);
        } else {
          if (value > 0) {
            form.setValue(name as any, value - 1);
            if (value === 1) {
              setPriceForChildrenDisabled(true);
              form.setValue("pricePerChildren", 0);
            }
          }
        }
        break;
      case "maximumPets":
        if (type === "increase") {
          setPriceForPetsDisabled(false);
          form.setValue(name as any, value + 1);
        } else {
          if (value > 0) {
            form.setValue(name as any, value - 1);
            if (value === 1) {
              setPriceForPetsDisabled(true);
              form.setValue("pricePerPets", 0);
            }
          }
        }
        break;
      default:
        if (type === "decrease") {
          if (value > 0) {
            form.setValue(name as any, value - 1);
          }
        }
        if (type === "increase") {
          form.setValue(name as any, value + 1);
        }
    }
  };

  const priceStyle = `disabled`;

  return (
    <Form {...form}>
      <form
        className="w-full max-w-sm  mx-auto space-y-3"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        {/* topdata */}
        {RoomsData.map((val, index) => {
          return (
            <FormField
              key={index}
              name={val.name as any}
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{val.labelName}</FormLabel>
                  <FormControl>
                    <Input placeholder={val.placeholder} {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          );
        })}
        {/* Ac/NonAc */}
        <FormField
          name="ac"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ac/NonAc</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value as any}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Ac/NonAc" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="ac">AC</SelectItem>
                  <SelectItem value="nonAc">Non AC</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        {/* beds */}
        <table className="border-collapse w-full">
          <tbody className="">
            {bedsPillowsBedSheetCount.map((data, index) => (
              <FormField
                name={data.name as any}
                control={form.control}
                key={index}
                render={({ field }) => (
                  <tr>
                    <td className="border-gray-400 border-2 w-[40%] p-2">
                      {data.labelName}
                    </td>
                    <td className="border-gray-400 border-2 text-center p-2 w-[60%]">
                      <div className=" flex justify-center">
                        <div className="flex gap-3 items-center">
                          <button
                            type="button"
                            className="bg-gray-300 px-3 py-1 rounded-xl text-xl cursor-pointer"
                            onClick={() =>
                              handleButtonClick({
                                name: field.name,
                                value: field.value,
                                type: "decrease",
                              })
                            }
                          >
                            -
                          </button>
                          <FormControl>
                            <span className="w-5">{field.value}</span>
                          </FormControl>
                          <button
                            className="bg-gray-300 px-3 py-1 rounded-xl text-xl"
                            type="button"
                            onClick={() =>
                              handleButtonClick({
                                name: field.name,
                                value: field.value,
                                type: "increase",
                              })
                            }
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              />
            ))}
          </tbody>
        </table>
        {/* beds */}
        <div>
          <FormLabel>Days</FormLabel>
          <table className="border-collapse w-full">
            <tbody className="">
              {minMaxDaysToStayCount.map((data, index) => (
                <FormField
                  name={data.name as any}
                  control={form.control}
                  key={index}
                  render={({ field }) => (
                    <tr>
                      <td className="border-gray-400 border-2 w-[40%] p-2">
                        {data.labelName}
                      </td>
                      <td className="border-gray-400 border-2 text-center p-2 w-[60%]">
                        <div className=" flex justify-center">
                          <div className="flex gap-3 items-center">
                            <button
                              type="button"
                              className="bg-gray-300 px-3 py-1 rounded-xl text-xl cursor-pointer"
                              onClick={() =>
                                handleButtonClick({
                                  name: field.name,
                                  value: field.value,
                                  type: "decrease",
                                })
                              }
                            >
                              -
                            </button>
                            <FormControl>
                              <span className="w-5">{field.value}</span>
                            </FormControl>
                            <button
                              className="bg-gray-300 px-3 py-1 rounded-xl text-xl"
                              type="button"
                              onClick={() =>
                                handleButtonClick({
                                  name: field.name,
                                  value: field.value,
                                  type: "increase",
                                })
                              }
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                />
              ))}
            </tbody>
          </table>
        </div>
        {/* beds */}
        <div>
          <FormLabel>Count</FormLabel>
          <table className="border-collapse w-full">
            <tbody className="">
              {GuestChildrenPetsCount.map((data, index) => (
                <FormField
                  name={data.name as any}
                  control={form.control}
                  key={index}
                  render={({ field }) => (
                    <tr>
                      <td className="border-gray-400 border-2 w-[40%] p-2">
                        {data.labelName}
                      </td>
                      <td className="border-gray-400 border-2 text-center p-2 w-[60%]">
                        <div className=" flex justify-center">
                          <div className="flex gap-3 items-center">
                            <button
                              type="button"
                              className="bg-gray-300 px-3 py-1 rounded-xl text-xl cursor-pointer"
                              onClick={() =>
                                handleButtonClick({
                                  name: field.name,
                                  value: field.value,
                                  type: "decrease",
                                })
                              }
                            >
                              -
                            </button>
                            <FormControl>
                              <span className="w-5">{field.value}</span>
                            </FormControl>
                            <button
                              className="bg-gray-300 px-3 py-1 rounded-xl text-xl"
                              type="button"
                              onClick={() =>
                                handleButtonClick({
                                  name: field.name,
                                  value: field.value,
                                  type: "increase",
                                })
                              }
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                />
              ))}
            </tbody>
          </table>
        </div>
        {/* Prices */}
        {Prices.map((val, index) => {
          return (
            <FormField
              key={index}
              name={val.name as any}
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{val.labelName}</FormLabel>
                  <FormControl>
                    <Input
                      className={priceStyle}
                      placeholder={val.placeholder}
                      {...field}
                      disabled={
                        (val.name === "pricePerChildren" &&
                          priceForChildrenDisabled) ||
                        (val.name === "pricePerPets" && priceForPetsDisabled)
                      }
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          );
        })}
        <div className="w-16 mx-auto">
          <Button className="w-full" type="submit">
            save
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default Rooms;
