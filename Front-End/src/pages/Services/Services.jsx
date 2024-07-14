import { useSearchParams } from "react-router-dom";
import { useGetServicesQuery } from "../../Redux/service/service";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import Spinner from "../../components/Spinner/Spinner";
import { useEffect, useState } from "react";
import Pagination from "../../components/Pagination/Pagination";

export default function Services() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const [params, setParams] = useSearchParams();
  const category = params.get("c");

  const query = {};
  const [currentPage, setCurrentPage] = useState(1);
  query["page"] = currentPage;
  query["limit"] = 6;
  if (category) query["category"] = category;

  const { data, isLoading } = useGetServicesQuery({ ...query });
  const services = data?.data;

  useEffect(() => {
    if (category) setCurrentPage(1);
  }, [category]);

  if (isLoading) return <Spinner />;

  return (
    <section>
      <div className="relative">
        <img
          src="https://sunshinecares.in/images/nch.jpg"
          alt=""
          className="w-full h-28 md:h-60"
        />
        <div className="container">
          <h2 className="absolute top-1/2 -translate-y-1/2 text-3xl text-neutral font-semibold">
            emanager_business3 Services
          </h2>
        </div>
      </div>

      <div className="bg-primary py-10 text-base-100">
        <div className="container">
          <div>
            <h2 className="text-2xl sm:text-4xl font-semibold text-center">
              Our Exclusive Services
            </h2>
          </div>

          <div className="mt-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {services?.map((service) => (
                <ServiceCard key={service?._id} service={service} />
              ))}
            </div>
          </div>
        </div>

        <Pagination
          pages={data?.meta?.pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </section>
  );
}
