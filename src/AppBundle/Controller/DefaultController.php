<?php

namespace AppBundle\Controller;

use AppBundle\Classes\UsersClass;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class DefaultController extends Controller
{
    /**
     * Index page
     * @Route("/", name="homepage")
     */
    public function indexAction(Request $request)
    {
        // replace this example code with whatever you need
        return $this->render(
            'default/index.html.twig'
        );
    }

    /**
     * Get the data for first graph
     * @Route("/getDataForFirstGraph")
     * @Method("GET")
     * @param Request $request
     * @return string
     */
    public function getDataForFirstGraphAction(Request $request)
    {
        //only metre columns
        $columns = array('time','lev','hs','hx','hs_sw1','hs_sw8','hs_sea8','hs_sea','hs_ig','hs_fig','ss');
        $get['columns'] = &$columns;

        //get data
        $rResult = $this->getDoctrine()->getRepository('AppBundle:Ocean')->ajaxTable($get);

        //filter time
        foreach ($rResult as $key=>$result) {
            if (gettype($result['time']) === "object") {
                $rResult[$key]['time'] = $result['time']->format('d-M-Y');
            }
        }

        //get an average for each field per day
        $usersClass = new UsersClass();
        $averageData = $usersClass->getAveragePerDay($rResult);

        $i = 0;
        $returnArray = [];
        foreach ($averageData as $data) {
            $returnArray[$i] = $data;
            $i++;
        }

        $response = new Response(json_encode($returnArray));
        return $response;
    }

    /**
     * Route to get data for second graph
     * @Route("/getDataForSecondGraph")
     * @Method("GET")
     * @param Request $request
     * @return string
     */
    public function getDataForSecondGraphAction(Request $request)
    {
        //only time columns
        $columns = array('time','tp','tm01','tm02','tp_sw1','tp_sw8','tp_sea8','tp_sea','tm_sea');
        $get['columns'] = &$columns;

        //get data
        $rResult = $this->getDoctrine()->getRepository('AppBundle:Ocean')->ajaxTable($get);
        foreach ($rResult as $key=>$result) {
            if (gettype($result['time']) === "object") {
                $rResult[$key]['time'] = $result['time']->format('d-M-Y');
            }
        }

        $usersClass = new UsersClass();
        $averageData = $usersClass->getAveragePerDay($rResult);

        $i = 0;
        $returnArray = [];
        foreach ($averageData as $data) {
            $returnArray[$i] = $data;
            $i++;
        }

        $response = new Response(json_encode($returnArray));
        return $response;
    }

    /**
     * Route to get data for third graph
     * @Route("/getDataForThirdGraph")
     * @Method("GET")
     * @param Request $request
     * @return string
     */
    public function getDataForThirdGraphAction(Request $request)
    {
        //get knots columns
        $columns = array('time','wsp', 'gst', 'wd', 'wsp100', 'wsp50', 'wsp80', 'csp0');
        $get['columns'] = &$columns;

        //get data
        $rResult = $this->getDoctrine()->getRepository('AppBundle:Ocean')->ajaxTable($get);
        foreach ($rResult as $key=>$result) {
            if (gettype($result['time']) === "object") {
                $rResult[$key]['time'] = $result['time']->format('d-M-Y');
            }
        }

        $usersClass = new UsersClass();
        $averageData = $usersClass->getAveragePerDay($rResult);

        $i = 0;
        $returnArray = [];
        foreach ($averageData as $data) {
            $returnArray[$i] = $data;
            $i++;
        }

        $response = new Response(json_encode($rResult));
        return $response;
    }

    /**
     * Route to get data for fourth bar graph
     * @Route("/getDataForFourthGraph")
     * @Method("GET")
     * @param Request $request
     * @return string
     */
    public function getDataForFourthGraphAction(Request $request)
    {
        //only celcius columns
        $columns = array('time as date','tmp', 'sst');
        $get['columns'] = &$columns;

        //get data
        $rResult = $this->getDoctrine()->getRepository('AppBundle:Ocean')->ajaxTable($get);
        foreach ($rResult as $key=>$result) {
            if (gettype($result['date']) === "object") {
                $rResult[$key]['date'] = $result['date']->format('dmY');
            }
        }

        $response = new Response(json_encode($rResult));
        return $response;
    }
}
