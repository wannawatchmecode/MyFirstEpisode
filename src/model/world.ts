import { Color } from "./color";
import { IMeasurement, Measurement } from "./measurement";
import { ISky } from "./sky";
import { Unit } from "./unit";

export interface IWorld {
    name: string;
    sky: ISky;
    distanceFromSun: IMeasurement;
    talkBack(): void;
}

export interface IWannaWatchMeCodeWorldProps {
    
}

export class WannaWatchMeCodeWorld implements IWorld {
    sky: ISky;
    distanceFromSun: IMeasurement;
    readonly name: string = 'WannaWatchMeCodeWorld';

    constructor(props: IWannaWatchMeCodeWorldProps) {
        this.sky = {
            color: Color.orange
        }
        this.distanceFromSun = new Measurement({
            value: 30,
            unit: Unit.miles
        })
    }

    talkBack() {
        console.log(`Hello watcher. My name is ${this.name}. I am ${this.distanceFromSun.toString()} from the sun, and my color of my sky is ${this.sky.color}`)
    };
}