# Passiver Modus

In bestimmten Szenarien erlaubt das RZL Setup den sogenannten
passiven Modus. Wenn ein Vorgang (z. B. Installation) auf einem Gerät
automatisiert durchgeführt werden soll, kann das Setup mit dem
Parameter */passive* aufgerufen werden.

In diesem Modus ist keine Benutzerinteraktion erforderlich,
und das RZL Setup beendet sich nach erfolgreicher Durchführung automatisch.
Eine Ausnahme besteht, wenn während des Vorgangs ein Fehler auftritt.

Der passive Modus wird in folgenden Szenarien unterstützt:

- Auf dem Zielgerät ist noch keine Software von RZL installiert,
  und das Setup wird direkt aus dem Unterordner *Setup*
  eines bestehenden Daten-Repositorys gestartet.

- Auf dem Zielgerät ist bereits eine ältere RZL-Software installiert,
  und eine neuere Version von RZL Setup soll installiert werden.