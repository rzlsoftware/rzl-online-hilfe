# Technische Unterschiede zwischen SQL-Server Express und SQL-Server Standard

Im Folgenden werden die technischen Unterschiede zwischen den SQL-Server Editionen **Express** und **Standard** im Zusammenhang mit RZL Programmen aufgelistet. Die Unterschiede treffen auf alle SQL-Server-Versionen ab SQL-Server 2016 zu.

!!! warning "Hinweis"
    Allgemein ist zu erwähnen, dass sich die Performance durch ein Upgrade von Express auf Standard – vor allem bei vielen gleichzeitigen Benutzern - verbessert.

## Skalierungslimits

Die angeführten Limits beziehen sich nur auf die Datenbank-Engine. Limits für Analysis Services oder Reporting Services werden nicht angeführt, da diese Funktionen von den RZL Programmen nicht eingesetzt werden.

| Funktion                                                           | Express                              | Standard                               |
| ------------------------------------------------------------------ | ------------------------------------ | -------------------------------------- |
| Maximale von einer einzelnen Instanz verwendete Rechenkapazität    | Beschränkt auf 1 Socket oder 4 Kerne | Beschränkt auf 4 Sockets oder 24 Kerne |
| Maximaler Arbeitsspeicher für den Pufferpool pro Instanz           | 1410 MB                              | 128 GB                                 |
| Maximaler Arbeitsspeicher für Columnstore-Segmentcache pro Instanz | 352 MB                               | 32 GB                                  |
| Maximale speicheroptimierte Datengröße pro Datenbank               | 352 MB                               | 32 GB                                  |
| Maximale relationale Datenbankgröße                                | 10 GB                                | 524 PB                                 |

Eine vollständige Auflistung aller Funktionen ist unter  
[Editionen und unterstützte Features von SQL-Server 2022](https://learn.microsoft.com/de-de/sql/sql-server/editions-and-components-of-sql-server-2022?view=sql-server-ver16&preserve-view=true){:target="_blank"} zu finden.

Die Datenbankgröße bezieht sich nur auf die Daten selbst. Die Größe des Transaktionslogs ist für die Berechnung nicht relevant. Ebenso werden Dokumente, welche durch Verwendung der RZL Dokumentenverwaltung Plus ebenfalls in der Datenbank gespeichert werden, nicht in dieses Limit mit einberechnet.
