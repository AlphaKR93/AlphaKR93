import "temporal-polyfill/global";
import { Metadata, ResolvingMetadata } from "next";
import { ReactElement } from "react";

export {};

declare global {
  type PromiseLike<T> = Promise<T> | T;

  type Page<T> = (props: PageProps<T>) => PromiseLike<ReactElement | null>;
  type Meta<T> = (props: PageProps<T>, parent: ResolvingMetadata) => Promise<Metadata>;

  type Temporals = Temporal.Duration | Temporal.Instant | Temporal.PlainDate | Temporal.PlainDateTime | Temporal.PlainMonthDay | Temporal.PlainTime | Temporal.PlainYearMonth | Temporal.ZonedDateTime;
}
