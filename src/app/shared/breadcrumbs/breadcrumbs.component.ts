import { filter, map } from 'rxjs/operators';
import { Component, OnDestroy } from '@angular/core';
import { Event, ActivationEnd, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {
  
  public titulo: string = '';
  public tituloSubs$: Subscription = new Subscription();

  constructor(private router: Router) { 
    this.tituloSubs$ = this.getArgumentosRuta()
                           .subscribe(({titulo}) =>{
                              this.titulo = titulo;
                              document.title = `AdminPro - ${titulo}`
                           });
  }
  ngOnDestroy(){
    this.tituloSubs$.unsubscribe();
  }

  getArgumentosRuta(){
    return this.router.events
    .pipe(
      filter((event: Event): event is ActivationEnd => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map( (event: ActivationEnd) => event.snapshot.data )
    );
  }

}
