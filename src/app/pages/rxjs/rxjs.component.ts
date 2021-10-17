import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {

  public intervalSubs: Subscription = new Subscription();

  constructor() {
/*
    this.retornaObservable().pipe(retry(1))
    .subscribe(
      valor => console.log('subs:', valor) ,
      error => console.log('error:', error),
      ()    => console.log('completado')
    );
*/
    this.intervalSubs = this.retornaIntervalo().subscribe(console.log);

  }
  ngOnDestroy(){
    this.intervalSubs.unsubscribe();
  }
  retornaIntervalo(): Observable<number> {
    return interval(1000)
           .pipe(
            take(10),
            map( valor => valor + 1),
            filter( valor => (valor % 2 ===0) ? true : false )
            );
  }
  retornaObservable(): Observable<number> {
    let i = -1;
    const obs$ = new Observable<number>(observer =>{

      const intervalo = setInterval( () => {
        i++;
        observer.next(i);
        if (i ===7){
          clearInterval(intervalo);
          observer.complete();
        }
        if (i ===3){
          i = 0;
          clearInterval(intervalo);
          observer.error('Llego al error');
        }
      } , 1000)
    });
    
    return obs$;

  }
  
}
