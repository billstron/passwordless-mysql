var util = require('util');
var bcrypt = require('bcrypt');
var ProtoStore = require('passwordless-tokenstore');
var mysql = require("mysql");

/**
 * Constructor of Store
 * @param {String} conString URI as defined by the PostgreSQL specification. Please
 * check the documentation for details: 
 * https://github.com/brianc/node-postgres
 * @param {Object} [options] Combines both the options for the PostgreClient as well
 * as the options for Store. For the PostgreClient options please refer back to
 * the documentation. Store understands the following options: 
 * (1) { pgstore: { table: string }} to change the name of the table used. Defaults to: 'passwordless'
 * (2) { pgstore: { pgPoolSize: integer }} to change the pool size of PostgreSQL client. Defaults to: 10
 * @constructor
 */
function Store(conString, options) {
  
}

util.inherits(Store, ProtoStore);

/**
 * Checks if the provided token / user id combination exists and is
 * valid in terms of time-to-live. If yes, the method provides the 
 * the stored referrer URL if any. 
 * @param  {String}   token to be authenticated
 * @param  {String}   uid Unique identifier of an user
 * @param  {Function} callback in the format (error, valid, referrer).
 * In case of error, error will provide details, valid will be false and
 * referrer will be null. If the token / uid combination was not found 
 * found, valid will be false and all else null. Otherwise, valid will 
 * be true, referrer will (if provided when the token was stored) the 
 * original URL requested and error will be null.
 */
Store.prototype.authenticate = function(token, uid, callback) {
};

/**
 * Stores a new token / user ID combination or updates the token of an
 * existing user ID if that ID already exists. Hence, a user can only
 * have one valid token at a time
 * @param  {String}   token Token that allows authentication of _uid_
 * @param  {String}   uid Unique identifier of an user
 * @param  {Number}   msToLive Validity of the token in ms
 * @param  {String}   originUrl Originally requested URL or null
 * @param  {Function} callback Called with callback(error) in case of an
 * error or as callback() if the token was successully stored / updated
 */
Store.prototype.storeOrUpdate = function(token, uid, msToLive, originUrl, callback) {
};

/**
 * Invalidates and removes a user and the linked token
 * @param  {String} uid  user ID
 * @param  {Function} callback called with callback(error) in case of an
 * error or as callback() if the uid was successully invalidated
 */
Store.prototype.invalidateUser = function(uid, callback) {

};

/**
 * Removes and invalidates all token
 * @param  {Function} callback Called with callback(error) in case of an
 * error or as callback() otherwise
 */
Store.prototype.clear = function(callback) {

};

/**
 * Number of tokens stored (no matter the validity)
 * @param  {Function} callback Called with callback(null, count) in case
 * of success or with callback(error) in case of an error
 */
Store.prototype.length = function(callback) {
};

Store.prototype.disconnect = function() {
};


module.exports = Store;