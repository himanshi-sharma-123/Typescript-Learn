abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}
  abstract getSepia(): void;
  getReelTime(): number {
    return 8;
  }
}

// const hs = new TakePhoto("text","Test") // error : cannot make object

class Insta extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }

  getSepia(): void {
    console.log("Sepia");
  }
}
const hs = new Insta("text", "Test", 3);
hs.getReelTime();
