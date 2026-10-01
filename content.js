// Saved from the in-page editor. Replace content.js with this file to publish these edits.
window.CONTENT = {
  "pageTitle": "Ontario Jr. Reign — Zone, Possession & Shot Tracking",
  "header": {
    "eyebrow": "Ontario Jr. Reign",
    "title": "Live Tracking"
  },
  "sections": [
    {
      "title": "What we're tracking",
      "cards": [
        {
          "color": "cyan",
          "title": "1. Zone Time",
          "body": "How much time is spent in each third of the ice — Defensive, Neutral, Offensive. Tracked by tapping the zone live, every time it changes."
        },
        {
          "color": "amber",
          "title": "2. Possession",
          "body": "Who has the puck — Reign, Opponent, or Battle (contested). Tracked the same way, live, by a separate tracker."
        },
        {
          "color": "emerald",
          "title": "3. Shot Volume by Location",
          "body": "Where every shot comes from. Tapped on a rink diagram, tagged Reign or Opponent."
        }
      ]
    },
    {
      "title": "How it connects",
      "cards": [
        {
          "color": "white",
          "title": "3 trackers, one job each",
          "body": "It could be three players, three phones (digital devices) — each of them is responsible for Zone Tracker, Possession Tracker, or Shots Tracker. Each only sees their own buttons, nothing else."
        },
        {
          "color": "white",
          "title": "Eric you can have the main view",
          "body": "The Main Display on a tablet or laptop. Contains Track Control (period, whistle) plus the live Summary (maps, reports). Nobody else can touch these."
        },
        {
          "color": "white",
          "title": "Linking it together (current brainstorm idea)",
          "body": "Host the site on **GitHub Pages** — free, just a link, no logins for anyone. **Google Sheets** behind it as the shared data store — every tap lands there in real time, and that same sheet doubles as the raw data export."
        }
      ]
    }
  ],
  "tryIt": {
    "title": "Here is the concept Demo",
    "subtitle": "Example data below — switch between all four device views, flip periods, and try the Summary toggle."
  },
  "footer": "Internal prototype — Ontario Jr. Reign",
  "demo": {
    "banner": "Concept preview — example data",
    "eyebrow": "Ontario Jr. Reign",
    "title": "Zone, Possession & Shots — Split Roles",
    "tabs": {
      "zone": "Zone Tracker",
      "possession": "Possession Tracker",
      "shots": "Shots Tracker",
      "main": "Main View"
    },
    "periodLabel": "Period",
    "liveLabel": "LIVE",
    "zoneNames": {
      "D": "Defensive",
      "N": "Neutral",
      "O": "Offensive"
    },
    "possessionNames": {
      "reign": "Reign",
      "opp": "Opponent",
      "battle": "Battle"
    },
    "zoneScreen": {
      "elapsedNote": "elapsed this period — sanity-check it looks right",
      "instruction": "This device owns Zone — tap the moment it changes",
      "exampleNote": "(currently showing: Defensive selected, as an example)"
    },
    "possessionScreen": {
      "elapsedNote": "elapsed this period — sanity-check it looks right",
      "instruction": "This device owns Possession — tap the moment it changes",
      "exampleNote": "(currently showing: Opponent selected, as an example)"
    },
    "shotsScreen": {
      "loggedNote": "shots logged this period",
      "reignButton": "Reign",
      "opponentButton": "Opponent",
      "instruction": "Tap the spot the shot came from",
      "exampleNote": "(showing Off-Center selected, as an example)"
    },
    "main": {
      "trackControlTitle": "Track Control — real period transitions, touched a few times a game",
      "markLive": "Mark LIVE",
      "markStopped": "Mark STOPPED",
      "trackControlNote": "Switching periods auto-stops the one you're leaving — the new period opens STOPPED until LIVE is tapped at the actual puck drop.",
      "summaryTitle": "Summary — pure viewing, never touches the live clock",
      "wholeGameButton": "Whole Game (Live)",
      "drillButton": "Drill into periods",
      "viewingLabel": "Viewing:",
      "wholeGameNote": " — updates every second off the real clock, no matter how long the game runs",
      "wholeGameLabel": "Whole game so far",
      "nothingSelectedLabel": "Nothing selected",
      "periodPrefix": "Period ",
      "phoneTapHint": "",
      "zoneTimeTitle": "Zone Time",
      "zoneTimeDetail": "of live time",
      "possessionByZoneTitle": "Possession by Zone",
      "shotLocationsTitle": "Shot Locations",
      "reignShotsLabel": "Reign",
      "opponentShotsLabel": "Opponent",
      "reference": "For reference: NHL average offensive-zone time is ~41%; the league's top possession team runs ~45-46%.",
      "activityLogTitle": "Activity log (example)"
    }
  },
  "data": {
    "periods": {
      "1": {
        "zone": {
          "D": 180,
          "N": 210,
          "O": 210
        },
        "poss": {
          "reign": 240,
          "opp": 204,
          "battle": 156
        },
        "joint": {
          "D": {
            "reign": 70,
            "opp": 60,
            "battle": 50
          },
          "N": {
            "reign": 90,
            "opp": 68,
            "battle": 52
          },
          "O": {
            "reign": 80,
            "opp": 76,
            "battle": 54
          }
        },
        "shots": {
          "reign": {
            "DL": 0,
            "DC": 0,
            "DR": 0,
            "NL": 1,
            "NC": 1,
            "NR": 0,
            "OL": 2,
            "OC": 4,
            "OR": 2
          },
          "opp": {
            "DL": 2,
            "DC": 3,
            "DR": 2,
            "NL": 0,
            "NC": 1,
            "NR": 0,
            "OL": 0,
            "OC": 0,
            "OR": 0
          }
        }
      },
      "2": {
        "zone": {
          "D": 228,
          "N": 204,
          "O": 168
        },
        "poss": {
          "reign": 204,
          "opp": 246,
          "battle": 150
        },
        "joint": {
          "D": {
            "reign": 60,
            "opp": 110,
            "battle": 58
          },
          "N": {
            "reign": 80,
            "opp": 76,
            "battle": 48
          },
          "O": {
            "reign": 64,
            "opp": 60,
            "battle": 44
          }
        },
        "shots": {
          "reign": {
            "DL": 0,
            "DC": 0,
            "DR": 0,
            "NL": 1,
            "NC": 2,
            "NR": 0,
            "OL": 1,
            "OC": 2,
            "OR": 1
          },
          "opp": {
            "DL": 3,
            "DC": 4,
            "DR": 3,
            "NL": 0,
            "NC": 1,
            "NR": 0,
            "OL": 0,
            "OC": 0,
            "OR": 0
          }
        }
      },
      "3": {
        "zone": {
          "D": 252,
          "N": 138,
          "O": 210
        },
        "poss": {
          "reign": 180,
          "opp": 252,
          "battle": 168
        },
        "joint": {
          "D": {
            "reign": 60,
            "opp": 140,
            "battle": 52
          },
          "N": {
            "reign": 50,
            "opp": 48,
            "battle": 40
          },
          "O": {
            "reign": 70,
            "opp": 64,
            "battle": 76
          }
        },
        "shots": {
          "reign": {
            "DL": 0,
            "DC": 0,
            "DR": 0,
            "NL": 1,
            "NC": 1,
            "NR": 0,
            "OL": 1,
            "OC": 2,
            "OR": 1
          },
          "opp": {
            "DL": 4,
            "DC": 5,
            "DR": 3,
            "NL": 0,
            "NC": 1,
            "NR": 0,
            "OL": 0,
            "OC": 0,
            "OR": 0
          }
        }
      },
      "OT": {
        "zone": {
          "D": 0,
          "N": 0,
          "O": 0
        },
        "poss": {
          "reign": 0,
          "opp": 0,
          "battle": 0
        },
        "joint": {
          "D": {
            "reign": 0,
            "opp": 0,
            "battle": 0
          },
          "N": {
            "reign": 0,
            "opp": 0,
            "battle": 0
          },
          "O": {
            "reign": 0,
            "opp": 0,
            "battle": 0
          }
        },
        "shots": {
          "reign": {
            "DL": 0,
            "DC": 0,
            "DR": 0,
            "NL": 0,
            "NC": 0,
            "NR": 0,
            "OL": 0,
            "OC": 0,
            "OR": 0
          },
          "opp": {
            "DL": 0,
            "DC": 0,
            "DR": 0,
            "NL": 0,
            "NC": 0,
            "NR": 0,
            "OL": 0,
            "OC": 0,
            "OR": 0
          }
        }
      }
    },
    "activityLog": [
      {
        "t": "Per 3 · 14:02",
        "text": "Possession → Opponent"
      },
      {
        "t": "Per 3 · 14:05",
        "text": "Zone → Defensive"
      },
      {
        "t": "Per 3 · 13:52",
        "text": "Reign shot — Off Center"
      },
      {
        "t": "Per 3 · 13:41",
        "text": "Possession → Battle"
      },
      {
        "t": "Per 3 · 13:28",
        "text": "Zone → Neutral"
      },
      {
        "t": "Per 3 · 13:15",
        "text": "Opponent shot — Def Center"
      }
    ]
  }
};
