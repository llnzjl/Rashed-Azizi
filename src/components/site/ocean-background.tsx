import { publicAsset } from "@/data/portfolio";

export function OceanBackground() {
  return (
    <div
      aria-hidden="true"
      className="ocean-background"
      style={{ backgroundImage: `url("${publicAsset("/ocean-wallpaper.jpg")}")` }}
    />
  );
}
