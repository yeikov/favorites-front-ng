import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    standalone: true,
    name: 'score',
})
export class ScorePipe implements PipeTransform {
    transform(value: number | string): string {
        let stars = '⭐️';
        
        return `${value} ${stars.repeat(Number(value))}`;
    }
}