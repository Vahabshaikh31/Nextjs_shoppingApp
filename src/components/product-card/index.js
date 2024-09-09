"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";

export function ProductCard({ Item }) {
  const router = useRouter();

  const handleDetail = (id) => {
    router.push(`/${id}`);
  };
  return (
    <Card>
      <CardContent>
        <div className="w-full aspect-w-16 aspect-h-8 lg:h-80 ">
          <img
            src={Item?.thumbnail}
            alt={Item?.title}
            className="h-full w-full object-cover object-top"
          />
        </div>

        <div className="p-6">
          <CardTitle className=" text-lg font-bold text-gray-900">
            {Item?.title}
          </CardTitle>
          <div className=" mt-4 flex items-center flex-wrap gap-2">
            <p className=" text-lg font-extrabold text-gray-800">
              {Item?.price}
            </p>
          </div>
          <div>
            <Button onClick={() => handleDetail(Item?.id)} >Details</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
