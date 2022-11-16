import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root',
})

export class ApiService {
    constructor(private http: HttpClient) {}

    // eslint-disable-next-line @typescript-eslint/member-ordering
    baseUrl = 'https://www.breakingbadapi.com/api/';

    getCharacters() {
        return this.http.get(`${this.baseUrl}characters`);
    }

    getCharacter(id){
        return this.http.get(`${this.baseUrl}characters/${id}`);
    }

    getEpisodes() {
        return this.http.get(`${this.baseUrl}episodes`);
    }

    getEpisode(id){
        return this.http.get(`${this.baseUrl}episodes/${id}`);
    }

    getQuotes() {
        return this.http.get(`${this.baseUrl}quotes`);
    }

    getDeath() {
        return this.http.get(`${this.baseUrl}Death`);
    }
}
