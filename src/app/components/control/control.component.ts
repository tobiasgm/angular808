import {Component, OnInit} from '@angular/core';
import {AudioengineService} from '../../services/audioengine.service';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {

  tempo: number;
  volume: number;

  constructor(private audioengineService: AudioengineService) {}

  ngOnInit(): void {
    this.audioengineService.initAudioEngine(100, 16);
    this.audioengineService.initTracks();
    this.tempo = this.audioengineService.BPM;
    this.volume = this.audioengineService.outputGain.gain.value;
  }

  play(): void {
    this.audioengineService.play();
  }

  stop(): void {
    this.audioengineService.stop();
  }

  setTempo(tempo: number): void {
    this.audioengineService.setTempo(tempo);
  }

  setVolume(volume: number): void {
    this.audioengineService.setVolume(volume);
  }

}
