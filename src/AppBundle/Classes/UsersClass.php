<?php
namespace AppBundle\Classes;

/**
 * Class UsersClass
 *
 * @package AppBundle\Classes
 */

class UsersClass
{

    public function formatDataForDatatable($users)
    {
        $iTotal = 0;
        $iFilteredTotal = 0;
        $output = array(
            "iTotalRecords" => $iTotal,
            "iTotalDisplayRecords" => $iFilteredTotal,
            "aaData" => array()
        );

        foreach ($users as $user) {
            $row = [];
            $row[] = $user['id'];
            $row[] = $user['first_name'];
            $row[] = $user['last_name'];
            $row[] = $user['email'];
            $row[] = $user['gender'];
            $row[] = $user['ip_address'];
            $row[] = $user['company'];
            $row[] = $user['city'];
            $row[] = $user['title'];
            $row[] = $user['website'];
            $output['aaData'][] = $row;

            $iTotal++;
            $output['iTotalRecords'] = $iTotal;
        }

        return $output;
    }
    
    public function getTotalPerDay($data)
    {
        $returnData = [];
        $formattedData = [];
        $cacheDate = '';
        foreach ($data as $key => $row) {
            $currentDate = $row['time'];

            $returnData[$currentDate] = [];

            if (!$cacheDate) {
                //new data
                $returnData[$currentDate] = $row;
                $formattedData = $row;
            } else if ($cacheDate && $cacheDate === $currentDate) {
                foreach ($row as $rowKey => $rowData) {
                    if ($rowKey === 'time') {
                        continue;
                    }
                    if (array_key_exists($rowKey, $formattedData)) {
                        $formattedData[$rowKey] = $formattedData[$rowKey] + $rowData;
                    } else {
                        $formattedData[$rowKey] = $rowData;
                    }
                }
            } else if ($cacheDate && $cacheDate !== $currentDate) {
                //date has changed so put the exiting data for cache date
                $returnData[$cacheDate] = $formattedData;

                //add new row
                $returnData[$currentDate] = $row;
                $formattedData = $row;

            }
            $cacheDate = $currentDate;
        }
        return $returnData;
    }

    public function getAveragePerDay($data)
    {
        $formattedData = $this->getTotalPerDay($data);
        $count = count($data);

        //get average per day
        foreach($formattedData as $outerKey=>$date) {
            if (!$date) {
                unset($formattedData[$outerKey]);
            }
            foreach ($date as $innerKey=>$columnData) {
                if ($innerKey === 'time' || (int)$columnData === 0) {
                    continue;
                }
                $formattedData[$outerKey][$innerKey] = ($columnData / $count);
            }
        }

        return $formattedData;
    }
}