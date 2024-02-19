import { useCallback, useEffect, useMemo, useState } from "react";

export default ({ toppings }) => {
  const noGoodToppings = useMemo(() => ["pineapple", "hotdog"], []);

  const toppingFilter = useCallback(
    (toppings) => {
      return toppings.filter((toppings, index, arr) => {
        return (
          !noGoodToppings.includes(toppings) && arr.indexOf(toppings) === index
        );
      });
    },
    [noGoodToppings]
  );
  const goodToppings = useMemo(() => {
    return toppingFilter(toppings);
  }, [toppings]);

  const [, setTime] = useState(new Date());
  useEffect(() => {
    const time = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(time);
    };
  }, []);

  return (
    <>
      <ul>
        {goodToppings.map((topping) => (
          <li key={topping}>{topping}</li>
        ))}
      </ul>
    </>
  );
};
