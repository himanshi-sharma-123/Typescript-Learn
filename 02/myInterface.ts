interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  startTrial(): string;
  getCoupon(couponname: string): number;
}

interface User {
  githubToken: string;
}

interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const himanshi: User = {
  dbId: 22,
  email: "h@gmail.com",
  userId: 2211,
  githubToken: "github",
  startTrial: () => {
    return "trail";
  },
  getCoupon: (name: "himanshi1") => {
    return 10;
  },
};

export {};
