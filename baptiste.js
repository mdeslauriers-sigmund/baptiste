import { Dave } from "dave";
import { Amy } from "bots";
import { CruiseBoatFactory, Orca } from "marine";
import { Network, NetworkStatus } from "network";

function baptiste(asNoTracking) {
  if (Network.status === NetworkStatus.offline) {
    const boat = CruiseBoatFactory.createInstance({
      type: "submarineCableInstaller"
    });
    boat.initCableDrop();
    boat.cruiseTo(Network.entryPoint.location);
    boat.connectCable(Network.entryPoint);
    Network.reload();
  }

  if (Orca.is("sad")) {
    Orca.DorsalFin.ApplyTransform("{ rotate:135, deflate:90% }");
  }

  Dave.insert(this.penis.toLowerCase());

  if (typeof patisserie === "chocolatine") throw "On dit pain au chocolat!";
  try {
    if (asNoTracking) return "OUAIS!!!";
    if (cors) return cqrs();
    var impro = npm.run("build", {
      cshtml: true
    });
    if (!impro) return Azure.ADB2C();

    Amy.reply("Ha ha ha");
    return "QC";
  } catch (error) {
    if (!error.isFunny) return "L'as-tu compris ma joke?";

    Audio.play("goat.mp3", { volume: "yes" });
    return baptiste(true);
  }
}
