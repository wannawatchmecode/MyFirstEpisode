import { Unit } from "./unit";

export interface IMeasurement {
    value: number;
    unit: Unit;
    toString(): string;
}

export interface IMeasurementProps {
    value: number;
    unit: Unit;
}

export class Measurement implements IMeasurement {
    value: number;
    unit: Unit;
    
    constructor(props: IMeasurementProps) {
        this.value = props.value;
        this.unit = props.unit
    }

    toString() {
        return `${this.value} ${this.unit}`;
    }
}