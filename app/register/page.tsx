"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Checkbox } from "@/components/ui/checkbox";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { registerFormSchema, roomsSchema } from "@/_schema/roomregisterschema";
import { AmenitiesCheckBox, RoomRegisterData } from "@/jsondata/roomregister";
import RoomsForm from "@/components/myrooms/myroomsform";

const RegisterRoom = () => {
  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      roomName: "",
      address: "",
      locationLink: "",
      email: "",
      phoneNumber: "",
      rooms: [],
    },
  });

  const onSubmit = (values: z.infer<typeof registerFormSchema>) => {
    console.log(values);
  };

  const addRoom = (roomData: z.infer<typeof roomsSchema>) => {
    form.getValues("rooms");
    form.setValue("rooms", [...form.getValues("rooms"), roomData]);
    console.log(form.getValues("rooms"));
  };

  return (
    <div className="w-full h-full">
      <div className="w-full  h-full">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="h-full w-full flex flex-col justify-center items-center pb-4 "
          >
            {RoomRegisterData.map((data, index) => (
              <FormField
                name={data.name as any}
                key={index}
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{data.labelName}</FormLabel>
                    <FormControl>
                      <Input placeholder={data.placeholder} {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            ))}
            {RoomRegisterData.map((data, index) => (
              <FormField
                name={data.name as any}
                key={index}
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{data.labelName}</FormLabel>
                    <FormControl>
                      <Input placeholder={data.placeholder} {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            ))}
            {RoomRegisterData.map((data, index) => (
              <FormField
                name={data.name as any}
                key={index}
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{data.labelName}</FormLabel>
                    <FormControl>
                      <Input placeholder={data.placeholder} {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            ))}
            {RoomRegisterData.map((data, index) => (
              <FormField
                name={data.name as any}
                key={index}
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{data.labelName}</FormLabel>
                    <FormControl>
                      <Input placeholder={data.placeholder} {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            ))}
            {/* <FormField
              control={form.control}
              name="amenities"
              render={({}) => (
                <FormItem className="w-1/4 h-auto grid grid-cols-3">
                  {AmenitiesCheckBox.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name="amenities"
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(check) => {
                                  console.log(
                                    check + " " + JSON.stringify(field.value)
                                  );
                                  return check
                                    ? field.value
                                      ? field.onChange([
                                          ...field.value,
                                          item.id,
                                        ])
                                      : field.onChange([item.id])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== item.id
                                        )
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel>{item.label}</FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="amenities"
              render={({}) => (
                <FormItem className="w-1/4 h-auto grid grid-cols-3">
                  {AmenitiesCheckBox.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name="amenities"
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(check) => {
                                  console.log(
                                    check + " " + JSON.stringify(field.value)
                                  );
                                  return check
                                    ? field.value
                                      ? field.onChange([
                                          ...field.value,
                                          item.id,
                                        ])
                                      : field.onChange([item.id])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== item.id
                                        )
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel>{item.label}</FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="amenities"
              render={({}) => (
                <FormItem className="w-1/4 h-auto grid grid-cols-3">
                  {AmenitiesCheckBox.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name="amenities"
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(check) => {
                                  console.log(
                                    check + " " + JSON.stringify(field.value)
                                  );
                                  return check
                                    ? field.value
                                      ? field.onChange([
                                          ...field.value,
                                          item.id,
                                        ])
                                      : field.onChange([item.id])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== item.id
                                        )
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel>{item.label}</FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                </FormItem>
              )}
            /> */}

            {/* <div className="w-1/4">
              {RoomRegisterData.map((data, index) => (
                <FormField
                  name={data.name as any}
                  key={index}
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{data.labelName}</FormLabel>
                      <FormControl>
                        <Input placeholder={data.placeholder} {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              ))}
              <FormField
                control={form.control}
                name="amenities"
                render={({}) => (
                  <FormItem>
                    <FormLabel>Amenities</FormLabel>
                    {AmenitiesCheckBox.map((item) => (
                      <FormField
                        key={item.id}
                        control={form.control}
                        name="amenities"
                        render={({ field }) => {
                          return (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(item.id)}
                                  onCheckedChange={(check) => {
                                    console.log(
                                      check + " " + JSON.stringify(field.value)
                                    );
                                    return check
                                      ? field.value
                                        ? field.onChange([
                                            ...field.value,
                                            item.id,
                                          ])
                                        : field.onChange([item.id])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== item.id
                                          )
                                        );
                                  }}
                                />
                              </FormControl>
                              <FormLabel>{item.label}</FormLabel>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
                  </FormItem>
                )}
              ></FormField>
            </div>
            <div className="w-1/4">
              <div className="flex flex-row gap-2">
                {form.getValues("rooms").map((data, index) => {
                  // console.log(data);
                  return (
                    <div
                      className=" h-12 w-12 rounded-xl flex items-center justify-center text-2xl bg-[#003C43]"
                      key={index}
                    >
                      <RoomsForm
                        value={`R${index}`}
                        addRoom={addRoom}
                        data={data}
                      />
                    </div>
                  );
                })}
                <div className=" h-12 w-12 rounded-xl flex items-center justify-center text-2xl ">
                  <RoomsForm value="+" addRoom={addRoom} data={0} />
                </div>
              </div>
            </div>
            <div className="w-1/4">
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </div> */}
          </form>
        </Form>
      </div>
    </div>
  );
};

export default RegisterRoom;
