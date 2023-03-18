const express = require('express');
const db = require('.config/connection');
const {User, Reaction, Thought} = require('./models')