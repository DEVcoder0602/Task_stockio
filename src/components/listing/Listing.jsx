// import { useEffect } from "react";
import ListingCard from "./ListingCard";
import { useDispatch, useSelector } from "react-redux";
import {
  // addWarehouses,
  setSelectedCities,
  setSelectedClusters,
} from "../../store/warehouseSlice";
import { Link } from "react-router-dom";

const Listing = () => {
  const dispatch = useDispatch();
  const warehouses = useSelector((state) => state.warehouse.warehouses);
  const selectedCity = useSelector((state) => state.warehouse.selectedCities);
  const selectedCluster = useSelector(
    (state) => state.warehouse.selectedClusters
  );

  const handleCityChange = (e) => {
    const city = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      dispatch(setSelectedCities([...selectedCity, city]));
    } else {
      dispatch(setSelectedCities(selectedCity.filter((item) => item !== city)));
    }
  };

  const handleClusterChange = (e) => {
    const cluster = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      dispatch(setSelectedClusters([...selectedCluster, cluster]));
    } else {
      dispatch(
        setSelectedClusters(selectedCluster.filter((item) => item !== cluster))
      );
    }
  };

  // useEffect(() => {
  //   const fetchWarehouses = async () => {
  //     try {
  //       const res = await fetch("/warehouse.json");

  //       const data = await res.json();

  //       dispatch(addWarehouses(data));

  //     } catch (error) {
  //       console.error("Error fetching JSON data:", error);
  //     }
  //   };
  //   fetchWarehouses();
  // }, []);

  const cities = warehouses.map((warehouse) => warehouse.city);

  const differentcities = Array.from(new Set(cities));

  const cluters = warehouses.map((warehouse) => warehouse.cluster);

  const differentcluters = Array.from(new Set(cluters));

  // console.log(differentcities);

  const filteredwarehouses = warehouses.filter((warehouse) => {
    const cityMatch =
      selectedCity.length === 0 || selectedCity.includes(warehouse.city);
    const clusterMatch =
      selectedCluster.length === 0 ||
      selectedCluster.includes(warehouse.cluster);

    return cityMatch && clusterMatch;
  });

  return (
    <div>
      <div className="filters">
        <div>
          <label>Filter by City:</label>
          {differentcities.map((city, index) => (
            <label key={index}>
              <input
                type="checkbox"
                label={city}
                value={city}
                checked={selectedCity.includes(city)}
                onChange={handleCityChange}
              />
              {city}
            </label>
          ))}
        </div>
        <div>
          <label>Filter by Cluster:</label>
          {differentcluters.map((cluster, index) => (
            <label key={index}>
              <input
                type="checkbox"
                label={cluster}
                value={cluster}
                checked={selectedCluster.includes(cluster)}
                onChange={handleClusterChange}
              />
              {cluster}
            </label>
          ))}
        </div>
      </div>
      <div className="card-container">
        {filteredwarehouses?.map((warehouse) => (
          <Link key={warehouse.id} to={`/warehouse/${warehouse.name}`}>
            <ListingCard key={warehouse.id} warehouse={warehouse} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Listing;
