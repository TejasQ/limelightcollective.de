import { useState, useEffect } from "react";
import { getFromAirTable } from "../util/getFromAirTable";

type Options = {
  tableName: string;
};

export const useAirTable = ({ tableName }: Options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const getAll = (fields: string[]) => {
    setLoading(true);
    getFromAirTable(tableName)
      .select({ fields, sort: [{ field: fields[0], direction: "asc" }] })
      .all()
      .then(r => {
        setData(r);
        setLoading(false);
      });
  };

  return { getAll, data, loading };
};
