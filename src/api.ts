export type Price =
  | {
      id: string;
      pricing?: number;
    }
  | null
  | undefined;

export const pricing = (id: string): Promise<Price> => {
  switch (id) {
    case "a":
      return Promise.resolve({
        id: "a",
        pricing: 10
      });
    case "b":
      return Promise.resolve({
        id: "b",
        pricing: 10
      });
    case "c":
      return Promise.resolve({
        id: "c",
        pricing: 5
      });
    case "d":
      return Promise.reject("no pricing for you");
  }
  return Promise.resolve(null);
};

export type Inventory =
  | {
      id: string;
      units?: number;
    }
  | null
  | undefined;

export const inventory = (id: string): Promise<Inventory> => {
  switch (id) {
    case "a":
      return Promise.resolve({
        id: "a",
        units: 5
      });
    case "b":
      return Promise.resolve({
        id: "b",
        units: 5
      });
    case "c":
      return Promise.resolve({
        id: "c",
        units: 3
      });
    case "d":
      return Promise.resolve({
        id: "d",
        units: 10
      });
  }
  return Promise.resolve(undefined);
};

export type Legal =
  | {
      id: string;
      isIllegal?: boolean;
    }
  | null
  | undefined;

export const legal = (id: string): Promise<Legal> => {
  switch (id) {
    case "a":
      return Promise.resolve({
        id: "a",
        isIllegal: false
      });
    case "b":
      return Promise.resolve({
        id: "b",
        isIllegal: true
      });
    case "c":
      return Promise.resolve({
        id: "c"
      });
    case "d":
      return Promise.reject("no legal for you");
  }
  return Promise.resolve(null);
};
