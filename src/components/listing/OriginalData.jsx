import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addWarehouses } from "../../store/warehouseSlice";
import Listing from "./Listing";

export const OriginalData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchWarehouses = async () => {
      try {
        const res = await fetch("/warehouse.json");

        const data = await res.json();

        dispatch(addWarehouses(data));
      } catch (error) {
        console.error("Error fetching JSON data:", error);
      }
    };
    fetchWarehouses();
  }, []);

  return <Listing />;
};
