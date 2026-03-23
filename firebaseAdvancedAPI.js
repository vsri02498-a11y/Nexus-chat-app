// firebaseAdvancedAPI.js

// Advanced Firebase Realtime Database API functions

// 1. Real-time listeners
function addRealtimeListener(dbRef, callback) {
    dbRef.on('value', (snapshot) => {
        callback(snapshot.val());
    });
}

// 2. Pagination
function getPaginatedData(dbRef, limit, lastKey) {
    let query = dbRef.orderByKey().limitToFirst(limit);
    if (lastKey) {
        query = query.startAt(lastKey);
    }
    return query.once('value');
}

// 3. Search
function searchData(dbRef, searchKey, searchValue) {
    return dbRef.orderByChild(searchKey).equalTo(searchValue).once('value');
}

// 4. Notifications
function sendNotification(userToken, message) {
    // Assuming a function to send notifications exists
    return sendPushNotification(userToken, message);
}

// 5. Batch operations
async function batchWrite(dbRef, updates) {
    return dbRef.update(updates);
}

module.exports = { addRealtimeListener, getPaginatedData, searchData, sendNotification, batchWrite };