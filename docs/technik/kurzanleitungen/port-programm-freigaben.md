# Port- und Programmfreigaben der RZL-Programme

## Warum sind Portfreigaben notwendig?

- **Kommunikation:**  
    RZL-Programme kommunizieren über bestimmte Ports. Standardmäßig sind diese Ports durch Firewalls oder Router blockiert, um die Sicherheit zu erhöhen. Um die Kommunikation zu ermöglichen, müssen diese Ports freigegeben werden.

- **Funktionsweise:**  
    RZL-Programme nutzen die Portfreigaben, um Daten zu senden und zu empfangen. Dies ist wichtig für Funktionen wie die Anbindung an Datenbanken, Onlinedienste wie FinanzOnline sowie die Gewährleistung der Funktionalität eigener Systemdienste.

- **Sicherheit:**  
    Portfreigaben können die Sicherheit Ihres Netzwerks beeinträchtigen. Geben Sie daher nur die Ports frei, die für Ihre RZL-Programme wirklich notwendig sind.

> **Hinweis:**  
> Im Zuge der Setup-Installation werden alle notwendigen Ports, die für die Funktionalität der RZL-Programme erforderlich sind, automatisch freigegeben. Eine erneute Freigabe ist in der Regel nicht notwendig.

Beim Öffnen oder Ändern von Firewall-Regeln ist es wichtig, sowohl die Standardportkonfigurationen als auch mögliche individuelle Portanpassungen (z. B. für den RZL-Dienst oder SQL-Server) zu berücksichtigen. So wird eine reibungslose Funktionalität gewährleistet und gleichzeitig den Sicherheitsrichtlinien entsprochen. Vor solchen Änderungen empfiehlt sich eine umfassende Sicherheitsüberprüfung.

## Verwendete Ports

| Anwendung/Protokoll         | Protokoll | Port(s)         |
|-----------------------------|-----------|-----------------|
| HTTP                        | TCP       | 80              |
| HTTPS                       | TCP       | 443             |
| RZL-Dienste                 | TCP       | 5756, 5757      |
| SMB                         | TCP       | 139, 445        |
| SQL-Server, SQL-Browser     | TCP/UDP   | 1433, 1434      |

## Programmfreigaben

- **SQL-Server:**  
    `C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\Binn\sqlservr.exe`

- **SQL-Browser:**  
    `C:\Programme\Microsoft SQL Server\90\Shared\sqlbrowser.exe`