import "temporal-polyfill/global";

declare global {
  type Temporals = Temporal.Duration | Temporal.Instant | Temporal.PlainDate | Temporal.PlainDateTime | Temporal.PlainMonthDay | Temporal.PlainTime | Temporal.PlainYearMonth | Temporal.ZonedDateTime;
}

export {};
