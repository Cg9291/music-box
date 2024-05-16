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
import tape from "../audio/midnight-sillage-kit/Tape FX - Midnight Sillage.mp3";
import electric_piano_04 from "../audio/midnight-sillage-kit/Electric Piano 04 - Midnight Sillage.mp3";
import snare_01 from "../audio/midnight-sillage-kit/Snare 01 - Midnight Sillage.mp3";
import kick_03 from "../audio/midnight-sillage-kit/Kick - Midnight Sillage.mp3";
import electric_guitar_02 from "../audio/midnight-sillage-kit/Electric Guitar 02 - Midnight Sillage.mp3";
import accoustic_bass_02 from "../audio/project-sounds/accoustic-bass-02-jazz-vanguard.mp3";
import bass from "../audio/project-sounds/bass-no-mans-joint.mp3";
import electric_piano from "../audio/project-sounds/electric_piano-no-mans-joint.mp3";
import electric_piano_02 from "../audio/project-sounds/electric-piano-02-midtown-summer.mp3";
import electric_piano_03 from "../audio/project-sounds/electric-piano-03-midtown-summer.mp3";
import kick from "../audio/project-sounds/kick-1-chrome.mp3";
import kick_02 from "../audio/project-sounds/kick-2-chrome.mp3";
import snare from "../audio/project-sounds/snare-chrome.mp3";
import synth_pad from "../audio/project-sounds/synth-pad-03-no-mans-joint.mp3";
import trumpet from "../audio/project-sounds/trumpet-midtown-summer.mp3";

export const audioKeyMappings = {
	Q: { name: "Snare", audio: snare },
	W: { name: "Kick 02", audio: kick_02 },
	E: { name: "Snare 01", audio: snare_01 },
	R: { name: "Tape", audio: tape },
	A: { name: "Open High Hat ", audio: open_HH_Sound },
	S: { name: "Clap", audio: clap },
	D: { name: "Hat", audio: kick_n_hat_Sound },
	F: { name: "Closed High Hat", audio: closed_HH },
	Z: { name: "Electric Piano", audio: electric_piano },
	X: { name: "Electric Piano 03", audio: electric_piano_03 },
	C: { name: "Sax", audio: sax },
	V: { name: "Trumpet", audio: trumpet },
};
