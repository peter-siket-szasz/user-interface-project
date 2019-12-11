
export const emotions = [
    // Related to object properties, Purple
    { name: "interest",     sentiment: "positive", kind: "object" },
    { name: "curiosity",    sentiment: "positive", kind: "object" }, 
    { name: "enthusiasm",   sentiment: "positive", kind: "object" },
    { name: "attraction",   sentiment: "positive", kind: "object" },
    { name: "desire",       sentiment: "positive", kind: "object" },
    { name: "admiration",   sentiment: "positive", kind: "object" },
    { name: "surprise",     sentiment: "positive", kind: "object" },
    { name: "amusement",    sentiment: "positive", kind: "object" },
    { name: "indifference", sentiment: "negative", kind: "object" },
    { name: "habituation",  sentiment: "negative", kind: "object" },
    { name: "boredom",      sentiment: "negative", kind: "object" },
    { name: "aversion",     sentiment: "negative", kind: "object" },
    { name: "disgust",      sentiment: "negative", kind: "object" },
    { name: "revulstion",   sentiment: "negative", kind: "object" },
    { name: "alarm",        sentiment: "negative", kind: "object" },
    { name: "panic",        sentiment: "negative", kind: "object" },
    
    // Future appraisal, Green
    { name: "hope",         sentiment: "positive", kind: "future" },
    { name: "excitement",   sentiment: "positive", kind: "future" },
    { name: "fear",         sentiment: "negative", kind: "future" },
    { name: "anxiety",      sentiment: "negative", kind: "future" },
    { name: "dread",        sentiment: "negative", kind: "future" },

    // Event-related, Orange / Red
    { name: "gratitude",    sentiment: "positive", kind: "event" },
    { name: "thankfulness", sentiment: "positive", kind: "event" },
    { name: "joy",          sentiment: "positive", kind: "event" },
    { name: "elation",      sentiment: "positive", kind: "event" },
    { name: "triumph",      sentiment: "positive", kind: "event" },
    { name: "jubilation",   sentiment: "positive", kind: "event" },
    { name: "patience",     sentiment: "positive", kind: "event" },
    { name: "contentment",  sentiment: "positive", kind: "event" },
    { name: "anger",        sentiment: "negative", kind: "event" },
    { name: "rage",         sentiment: "negative", kind: "event" },
    { name: "sorrow",       sentiment: "negative", kind: "event" },
    { name: "grief",        sentiment: "negative", kind: "event" },
    { name: "frustration",  sentiment: "negative", kind: "event" },
    { name: "restlessness", sentiment: "negative", kind: "event" },
    { name: "discontentment", sentiment: "negative", kind: "event" },
    { name: "disappointment", sentiment: "negative", kind: "event" },

    // Self-appraisal, 
    { name: "humility",     sentiment: "positive", kind: "self" },
    { name: "modesty",      sentiment: "positive", kind: "self" },
    { name: "pride",        sentiment: "negative", kind: "self" },
    { name: "arrogance",    sentiment: "negative", kind: "self" },

    // Social, Light/Dark Blue
    { name: "charity",      sentiment: "positive", kind: "social" },
    { name: "sympathy",     sentiment: "positive", kind: "social" },
    { name: "avarice",      sentiment: "negative", kind: "social" },
    { name: "greed",        sentiment: "negative", kind: "social" },
    { name: "miserliness",  sentiment: "negative", kind: "social" },
    { name: "envy",         sentiment: "negative", kind: "social" },
    { name: "jealousy",     sentiment: "negative", kind: "social" },
    { name: "cruelty",      sentiment: "negative", kind: "social" },

    // Cathected Black/White :D
    { name: "love",         sentiment: "positive", kind: "cathected" },
    { name: "hate",         sentiment: "negative", kind: "cathected" },
]