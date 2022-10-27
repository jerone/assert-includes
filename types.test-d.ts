import { expectType } from "tsd";
import assertIncludes from ".";

expectType<boolean>(assertIncludes("abc", "a"));
