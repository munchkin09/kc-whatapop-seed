import { PipeTransform, Pipe } from '@angular/core';
import * as moment from 'moment';
import 'moment/locale/es';

@Pipe({ name: 'PublicationDate'})
export class PublicationDatePipe implements PipeTransform {
    transform(timestamp: string) {      
        return moment(timestamp).fromNow();

    }
}
