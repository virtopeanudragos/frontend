import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject  } from 'rxjs';
import { map, tap  } from 'rxjs/operators';
import { LocalstorageService } from "./localstorage.service";


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private studentsUrl = 'http://localhost:8080/student';
  private mentorsUrl = 'http://localhost:8080/mentors';

  private currentUserRoleSubject = new BehaviorSubject<'Student' | 'Team Leader' | 'Mentor' | undefined>(undefined);
  currentUserRole$ = this.currentUserRoleSubject.asObservable();

  private currentUserNameSubject = new BehaviorSubject<string | undefined>(undefined);
  currentUserName$ = this.currentUserNameSubject.asObservable();

  private currentTeamIdSubject = new BehaviorSubject<number | undefined>(undefined);
  currentTeamId$ = this.currentTeamIdSubject.asObservable();


  constructor(
    private http: HttpClient,
    private localStorageService: LocalstorageService) { }


  getStudentsByTeamId(teamId: number): Observable<any[]> {
    return this.getStudents().pipe(
      map(students => students.filter(student => student.team && student.team.id === teamId))
    );
  }

  getStudentByName(name: string): Observable<any> {
    return this.getStudents().pipe(
      map(students => students.find(student => student.name === name))
    );
  }

  getStudents(): Observable<any[]> {
    return this.http.get<any[]>(this.studentsUrl);
  }

  getMentors(): Observable<any[]> {
    return this.http.get<any[]>(this.mentorsUrl);
  }

  getTeamLeaders(): Observable<any[]> {
    return this.getStudents().pipe(map(students => students.filter(student => student.leader)));
  }


  // Setter method for currentUserRole
  setCurrentUserRole(role: 'Student' | 'Team Leader' | 'Mentor' | undefined): void {
    this.currentUserRoleSubject.next(role);
    if (role !== undefined) {
      this.localStorageService.setItem('currentUserRole', role);
    } else {
      this.localStorageService.removeItem('currentUserRole');
    }
  }

  // Getter method for currentUserRole
  getCurrentUserRole(): Observable<'Student' | 'Team Leader' | 'Mentor' | undefined> {
    const storedRole = this.localStorageService.getItem('currentUserRole');
    if (storedRole !== undefined) {
      // @ts-ignore
      this.currentUserRoleSubject.next(storedRole);
    }
    return this.currentUserRole$;
  }


  // Setter method for currentUserName
  setCurrentUserName(name: string | null): void {
    this.currentUserNameSubject.next(name || undefined);
    // @ts-ignore
    this.localStorageService.setItem('currentUserName', name);
  }

  // Getter method for currentUserName
  getCurrentUserName(): Observable<string | undefined> {
    const storedName = this.localStorageService.getItem('currentUserName');
    // @ts-ignore
    this.currentUserNameSubject.next(storedName || undefined);
    return this.currentUserName$;
  }


  // Setter method for currentTeamId
  setCurrentTeamId(id: number | undefined): void {
    this.currentTeamIdSubject.next(id);
    // @ts-ignore
    this.localStorageService.setItem('currentTeamId', id);
  }

  // Getter method for currentTeamId
  getCurrentTeamId(): Observable<number | undefined> {
    // @ts-ignore
    const storedId = this.localStorageService.getItem<number | undefined>('currentTeamId');
    // @ts-ignore
    this.currentTeamIdSubject.next(storedId);
    return this.currentTeamId$;
  }

}
