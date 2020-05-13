import { useState, useEffect } from "react";
import { getFromAirTable } from "../util/getFromAirTable";

type Options = {
  tableName: string;
};
