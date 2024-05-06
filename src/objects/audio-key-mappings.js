import clap from "../audio/basic-sounds/clap.mp3";
import closed_HH from "../audio/basic-sounds/closed-HH.mp3";
import heater_1_Sound from "../audio/basic-sounds/heater-1.mp3";
import heater_2_Sound from "../audio/basic-sounds/heater-2.mp3";
import heater_3_Sound from "../audio/basic-sounds/heater-3.mp3";
import heater_4_Sound from "../audio/basic-sounds/heater-4.mp3";
import kick_n_hat_Sound from "../audio/basic-sounds/kick_n_Hat.mp3";
import kick_Sound from "../audio/basic-sounds/kick.mp3";
import open_HH_Sound from "../audio/basic-sounds/open - HH.mp3";
import sax from "../audio/midnight-sillage-kit/Sax_Midnight_Sillage.mp3";
import electric_guitar_01 from "../audio/midnight-sillage-kit/Electric Guitar 01 - Midnight Sillage.mp3";
import electric_piano from "../audio/midnight-sillage-kit/Electric Piano 01 - Midnight Sillage.mp3";
import electric_guitar_02 from "../audio/midnight-sillage-kit/Electric Guitar 02 - Midnight Sillage.mp3";
import electric_piano_02 from "../audio/midnight-sillage-kit/Electric Piano 02 - Midnight Sillage.mp3";

export const audioKeyMappings = {
	Q: { name: "electric_guitar_01", audio: electric_guitar_01 },
	W: { name: "clap", audio: clap },
	E: { name: "heater_1_Sound", audio: heater_1_Sound },
	R: { name: "closed_HH", audio: closed_HH },
	A: { name: "electric_guitar_02", audio: electric_guitar_01 },
	S: { name: "heater_3_Sound", audio: heater_3_Sound },
	D: { name: "electric_piano", audio: electric_piano },
	F: { name: "kick_n_hat_Sound", audio: kick_n_hat_Sound },
	Z: { name: "kick_Sound", audio: kick_Sound },
	X: { name: "open_HH_Sound", audio: open_HH_Sound },
	C: { name: "sax", audio: sax },
	V: { name: "electric_piano_02", audio: electric_piano_02 },
};
