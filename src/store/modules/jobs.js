import * as types from '../mutation-types.js';

const state = {
    all: [
    {
        company: {
            name: 'Apple',
            location: 'Amsterdam',
            email: 'jon.doe@apple.com',
            website: 'www.apple.com'
        },
        title: 'Software Engineer',
        salary: '650,-',
        type: 'Parttime',
        category: 'Computer Science, AI',
        description: 'A cool and breezy job with many opportunities!',
        date: '2020-10-05T14:48:00.000Z',
        id: '12ca37f0-f9ea-402b-bc87-7724efe7603b'
    },
    {
        company: {
            name: 'Microsoft',
            location: 'Nijmegen',
            email: 'jon.doe@live.com',
            website: 'www.microsoft.com'
        },
        title: 'Software Developer',
        salary: '750,-',
        type: 'Parttime, internship',
        category: 'Computer Science, AI',
        description: 'A hot and toasty job with many opportunities!',
        date: '2020-10-05T14:48:00.000Z',
        id: '119504a2-66f9-471e-8138-eb49fe223566'
    },
    {
        company: {
            name: 'Belastingdienst Nederland',
            location: 'Den Haag',
            email: 'jon.doe@nederland.nl',
            website: 'www.nederland.nl'
        },
        title: 'Hacker',
        salary: '1.000.000,-',
        type: 'Parttime, fulltime',
        category: 'PhD in Aerospace Engineering',
        description: 'Very hacking, much cracking, big moneyz!',
        date: '2020-10-05T14:48:00.000Z',
        id: '03efa9f3-02f2-46c1-a7a5-5e4d1d559766'
    },
    {
        company: {
            name: 'Microsoft',
            location: 'Nijmegen',
            email: 'jon.doe@appie.nl',
            website: 'www.appie.nl'
        },
        title: 'Albert Heijn',
        salary: '350,-',
        type: 'Parttime',
        category: 'Literally everyone',
        description: 'Beetje vakkenvullen, ja toch?',
        date: '2020-10-05T14:48:00.000Z',
        id: 'c2ead9df-54cd-4bab-9283-20629b9cb6ef'
    },
    {
        company: {
            name: 'Radboud',
            location: 'Nijmegen',
            email: 'jon.doe@ru.nl',
            website: 'www.ru.nl'
        },
        title: 'Student-assistant',
        salary: '450,-',
        type: 'Parttime',
        category: 'Computer Science, AI',
        description: '### Hey you! \n# YEAH YOU!! \nDo you want to sit around, talk to children and pretend you\'re not hungover? Well this is the job for you!',
        date: '2020-10-05T14:48:00.000Z',
        id: '0e1937c5-c75b-4c77-9e12-7d5834db7c1a'
    }],
    loadingComplete: true
}

const actions = {
    // ...
}

const mutations = {
    [types.CREATE_JOB] (state, job) {
        state.all.push(job)
    },
    [types.DELETE_JOB] (state, job) {
        const index = state.all.indexOf(job)
        state.all.splice(index, 1)
    },
}

const getters = {
    allJobs: state => state.all,
    loadingComplete: state => state.loadingComplete
}

export default {
    state,
    mutations,
    getters,
    actions
}