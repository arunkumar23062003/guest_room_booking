export interface iRoomRegisterData {
  labelName: string;
  placeholder: string;
  name: string;
}

export const RoomRegisterData: iRoomRegisterData[] = [
  {
    labelName: "Room Name",
    placeholder: "LeMeridian",
    name: "roomName",
  },
  {
    labelName: "Address",
    placeholder: "Cheran Manahar, Coimbatore",
    name: "address",
  },
  {
    labelName: "Location Link",
    placeholder: "https://lemeridian.go.map?243433_344444/",
    name: "locationLink",
  },
  {
    labelName: "Email",
    placeholder: "stayEase2024@gmail.com",
    name: "email",
  },
  {
    labelName: "Phone",
    placeholder: "6356463564",
    name: "phoneNumber",
  },
];

export const AmenitiesCheckBox = [
  {
    id: "freeParking",
    label: "Free Parking",
  },
  {
    id: "lift",
    label: "Lift",
  },
  {
    id: "gym",
    label: "Gym",
  },
  {
    id: "swimmingPool",
    label: "Swimming Pool",
  },
  {
    id: "park",
    label: "Park",
  },
  {
    id: "turf",
    label: "Turf",
  },
  {
    id: "hotel",
    label: "Hotel",
  },
];

export const RoomsData = [
  {
    labelName: "Floor Number",
    placeholder: "1",
    name: "floorNumber",
  },
  {
    labelName: "Room Number",
    placeholder: "A or 1",
    name: "roomNo",
  },
  {
    labelName: "Amenities",
    placeholder: "Fan,Washing Machine",
    name: "amenities",
  },
];

export const bedsPillowsBedSheetCount = [
  {
    labelName: "Beds",
    defaultValue: "1",
    name: "beds",
  },
  {
    labelName: "Pillow",
    defaultValue: "1",
    name: "pillows",
  },
  {
    labelName: "BedSheet",
    defaultValue: "1",
    name: "bedSheets",
  },
  
];

export const minMaxDaysToStayCount = [
  {
    labelName: "Min",
    defaultValue: "1",
    name: "minDaysToStay",
  },
  {
    labelName: "Max",
    defaultValue: "5",
    name: "maxDaysToStay",
  },
];

export const GuestChildrenPetsCount = [
  {
    labelName: "Guest",
    defaultValue: "1",
    name: "maximumGuest",
  },
  {
    labelName: "Children",
    defaultValue: "1",
    name: "maximumChildren",
  },
  {
    labelName: "Pets",
    defaultValue: "1",
    name: "maximumPets",
  },
];

export const Prices = [
  {
    labelName: "Price for Guest",
    placeholder: "2000",
    name: "pricePerGuest",
  },
  {
    labelName: "Price for Children",
    placeholder: "400",
    name: "pricePerChildren",
  },
  {
    labelName: "Price for Pets",
    placeholder: "100",
    name: "pricePerPets",
  },
]
