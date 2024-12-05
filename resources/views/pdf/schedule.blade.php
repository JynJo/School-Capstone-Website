<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Schedule PDF</title>
  </head>
  <body>
    <main>
        <table>
            <thead>
                <th>SECTION</th>
                <th>SUBJECT</th>
                <th>DAY</th>
                <th>START TIME</th>
                <th>END TIME</th>
            </thead>
            <tbody>
                @foreach($schedules as $schedule)
                    <tr>
                        <td>{{ $schedule->section->name }}</td>
                        <td>{{ $schedule->subject->name }}</td>
                        <td>{{ $schedule->day->name }}</td>
                        <td>{{ $schedule->start_time }}</td>
                        <td>{{ $schedule->end_time }}</td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </main>
  </body>
</html>
