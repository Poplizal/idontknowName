const tracksContainerTag =
  document.getElementsByClassName("tracksContainer")[0];
const audioTag = document.getElementsByClassName("audioTag")[0];

const tracks = [
  {
    trackId: "../../mp-3 tracks/Adjustor - အမှတ်တရနွေ.mp3",
    title: "A mat ta ya nway-(Adjustor)",
  },
  {
    trackId: "../../mp-3 tracks/Dear Crush - The Zero.mp3",
    title: "Dear crush - (the zero)",
  },
  {
    trackId: "../../mp-3 tracks/Moe Htet(B ) - Sunflower.mp3",
    title: "Sunflower - (Moe Htet)",
  },
  {
    trackId: "../../mp-3 tracks/သူငယ်ချင်းလို့မညာပါနဲ့- G Fatt.mp3",
    title: "Tha ngae chin loh manyar pr nk - (G-fatt)",
  },
];

for (var i = 0; i <= tracks.length; i++) {
  console.log(i);
  const tracksItemsTag = document.createElement("div");
  tracksItemsTag.classList.add("tracksItems");
  tracksItemsTag.addEventListener("click", () => {
    console.log(i);
  });
  const title = tracks[i].title;
  tracksItemsTag.textContent = (i + 1).toString() + ". " + title;
  tracksContainerTag.append(tracksItemsTag);
  console.log(i);
}
// console.log(i);
