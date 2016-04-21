<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity
 * @ORM\Table(name="data")
 * @ORM\Entity(repositoryClass="AppBundle\Repositories\OceanRepository")
 */
class Ocean
{
    /**
     * @var int $id
     *
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;

    /**
     * @ORM\Column(type="datetime")
     *
     * @var \DateTime $time
     */
    private $time;

    /**
     * @var int $lev
     *
     * @ORM\Column(name="lev", type="integer")
     */
    private $lev;

    /**
     * @var int $hs
     *
     * @ORM\Column(name="hs", type="integer")
     */
    private $hs;

    /**
     * @var int $hx
     *
     * @ORM\Column(name="hx", type="integer")
     */
    private $hx;

    /**
     * @var int $tp
     *
     * @ORM\Column(name="tp", type="integer")
     */
    private $tp;

    /**
     * @var int $tm01
     *
     * @ORM\Column(name="tm01", type="integer")
     */
    private $tm01;

    /**
     * @var int $tm02
     *
     * @ORM\Column(name="tm02", type="integer")
     */
    private $tm02;

    /**
     * @var int $dp
     *
     * @ORM\Column(name="dp", type="integer")
     */
    private $dp;

    /**
     * @var int $dpm
     *
     * @ORM\Column(name="dpm", type="integer")
     */
    private $dpm;

    /**
     * @var int $hs_sw1
     *
     * @ORM\Column(name="hs_sw1", type="integer")
     */
    private $hs_sw1;

    /**
     * @var int $hs_sw8
     *
     * @ORM\Column(name="hs_sw8", type="integer")
     */
    private $hs_sw8;

    /**
     * @var int $tp_sw1
     *
     * @ORM\Column(name="tp_sw1", type="integer")
     */
    private $tp_sw1;

    /**
     * @var int $tp_sw8
     *
     * @ORM\Column(name="tp_sw8", type="integer")
     */
    private $tp_sw8;

    /**
     * @var int $dpm_sw8
     *
     * @ORM\Column(name="dpm_sw8", type="integer")
     */
    private $dpm_sw8;

    /**
     * @var int $dpm_sw1
     *
     * @ORM\Column(name="dpm_sw1", type="integer")
     */
    private $dpm_sw1;

    /**
     * @var int $hs_sea8
     *
     * @ORM\Column(name="hs_sea8", type="integer")
     */
    private $hs_sea8;

    /**
     * @var int $hs_sea
     *
     * @ORM\Column(name="hs_sea", type="integer")
     */
    private $hs_sea;

    /**
     * @var int $tp_sea8
     *
     * @ORM\Column(name="tp_sea8", type="integer")
     */
    private $tp_sea8;

    /**
     * @var int $tp_sea
     *
     * @ORM\Column(name="tp_sea", type="integer")
     */
    private $tp_sea;

    /**
     * @var int $tm_sea
     *
     * @ORM\Column(name="tm_sea", type="integer")
     */
    private $tm_sea;

    /**
     * @var int $dpm_sea8
     *
     * @ORM\Column(name="dpm_sea8", type="integer")
     */
    private $dpm_sea8;

    /**
     * @var int $dpm_sea
     *
     * @ORM\Column(name="dpm_sea", type="integer")
     */
    private $dpm_sea;

    /**
     * @var int $hs_ig
     *
     * @ORM\Column(name="hs_ig", type="integer")
     */
    private $hs_ig;

    /**
     * @var int $hs_fig
     *
     * @ORM\Column(name="hs_fig", type="integer")
     */
    private $hs_fig;

    /**
     * @var int $wsp
     *
     * @ORM\Column(name="wsp", type="integer")
     */
    private $wsp;

    /**
     * @var int $gst
     *
     * @ORM\Column(name="gst", type="integer")
     */
    private $gst;

    /**
     * @var int $wd
     *
     * @ORM\Column(name="wd", type="integer")
     */
    private $wd;

    /**
     * @var int $wsp100
     *
     * @ORM\Column(name="wsp100", type="integer")
     */
    private $wsp100;

    /**
     * @var int $wsp50
     *
     * @ORM\Column(name="wsp50", type="integer")
     */
    private $wsp50;

    /**
     * @var int $wsp80
     *
     * @ORM\Column(name="wsp80", type="integer")
     */
    private $wsp80;

    /**
     * @var int $precip
     *
     * @ORM\Column(name="precip", type="integer")
     */
    private $precip;

    /**
     * @var int $tmp
     *
     * @ORM\Column(name="tmp", type="integer")
     */
    private $tmp;

    /**
     * @var int $rh
     *
     * @ORM\Column(name="rh", type="integer")
     */
    private $rh;

    /**
     * @var int $vis
     *
     * @ORM\Column(name="vis", type="integer")
     */
    private $vis;

    /**
     * @var int $cld
     *
     * @ORM\Column(name="cld", type="integer")
     */
    private $cld;

    /**
     * @var int $cb
     *
     * @ORM\Column(name="cb", type="integer")
     */
    private $cb;

    /**
     * @var int $csp0
     *
     * @ORM\Column(name="csp0", type="integer")
     */
    private $csp0;

    /**
     * @var int $cd0
     *
     * @ORM\Column(name="cd0", type="integer")
     */
    private $cd0;

    /**
     * @var int $ss
     *
     * @ORM\Column(name="ss", type="integer")
     */
    private $ss;

    /**
     * @var int $sst
     *
     * @ORM\Column(name="sst", type="integer")
     */
    private $sst;

    /**
     * @return int
     */
    public function getHsSw8()
    {
        return $this->hs_sw8;
    }

    /**
     * @param int $hs_sw8
     * @return $this
     */
    public function setHsSw8($hs_sw8)
    {
        $this->hs_sw8 = $hs_sw8;

        return $this;
    }

    /**
     * @return \DateTime
     */
    public function getTime()
    {
        return $this->time;
    }

    /**
     * @param \DateTime $time
     * @return $this
     */
    public function setTime($time)
    {
        $this->time = $time;

        return $this;
    }

    /**
     * @return int
     */
    public function getLev()
    {
        return $this->lev;
    }

    /**
     * @param int $lev
     * @return $this
     */
    public function setLev($lev)
    {
        $this->lev = $lev;

        return $this;
    }

    /**
     * @return int
     */
    public function getHs()
    {
        return $this->hs;
    }

    /**
     * @param int $hs
     * @return $this
     */
    public function setHs($hs)
    {
        $this->hs = $hs;

        return $this;
    }

    /**
     * @return int
     */
    public function getHx()
    {
        return $this->hx;
    }

    /**
     * @param int $hx
     * @return $this
     */
    public function setHx($hx)
    {
        $this->hx = $hx;

        return $this;
    }

    /**
     * @return int
     */
    public function getTp()
    {
        return $this->tp;
    }

    /**
     * @param int $tp
     * @return $this
     */
    public function setTp($tp)
    {
        $this->tp = $tp;

        return $this;
    }

    /**
     * @return int
     */
    public function getTm01()
    {
        return $this->tm01;
    }

    /**
     * @param int $tm01
     * @return $this
     */
    public function setTm01($tm01)
    {
        $this->tm01 = $tm01;

        return $this;
    }

    /**
     * @return int
     */
    public function getTm02()
    {
        return $this->tm02;
    }

    /**
     * @param int $tm02
     * @return $this
     */
    public function setTm02($tm02)
    {
        $this->tm02 = $tm02;

        return $this;
    }

    /**
     * @return int
     */
    public function getDp()
    {
        return $this->dp;
    }

    /**
     * @param int $dp
     * @return $this
     */
    public function setDp($dp)
    {
        $this->dp = $dp;

        return $this;
    }

    /**
     * @return int
     */
    public function getDpm()
    {
        return $this->dpm;
    }

    /**
     * @param int $dpm
     * @return $this
     */
    public function setDpm($dpm)
    {
        $this->dpm = $dpm;

        return $this;
    }

    /**
     * @return int
     */
    public function getHsSw1()
    {
        return $this->hs_sw1;
    }

    /**
     * @param int $hs_sw1
     * @return $this
     */
    public function setHsSw1($hs_sw1)
    {
        $this->hs_sw1 = $hs_sw1;

        return $this;
    }

    /**
     * @return int
     */
    public function getTpSw1()
    {
        return $this->tp_sw1;
    }

    /**
     * @param int $tp_sw1
     * @return $this
     */
    public function setTpSw1($tp_sw1)
    {
        $this->tp_sw1 = $tp_sw1;

        return $this;
    }

    /**
     * @return int
     */
    public function getTpSw8()
    {
        return $this->tp_sw8;
    }

    /**
     * @param int $tp_sw8
     * @return $this
     */
    public function setTpSw8($tp_sw8)
    {
        $this->tp_sw8 = $tp_sw8;

        return $this;
    }

    /**
     * @return int
     */
    public function getDpmSw8()
    {
        return $this->dpm_sw8;
    }

    /**
     * @param int $dpm_sw8
     * @return $this
     */
    public function setDpmSw8($dpm_sw8)
    {
        $this->dpm_sw8 = $dpm_sw8;

        return $this;
    }

    /**
     * @return int
     */
    public function getDpmSw1()
    {
        return $this->dpm_sw1;
    }

    /**
     * @param int $dpm_sw1
     * @return $this
     */
    public function setDpmSw1($dpm_sw1)
    {
        $this->dpm_sw1 = $dpm_sw1;

        return $this;
    }

    /**
     * @return int
     */
    public function getHsSea8()
    {
        return $this->hs_sea8;
    }

    /**
     * @param int $hs_sea8
     * @return $this
     */
    public function setHsSea8($hs_sea8)
    {
        $this->hs_sea8 = $hs_sea8;

        return $this;
    }

    /**
     * @return int
     */
    public function getHsSea()
    {
        return $this->hs_sea;
    }

    /**
     * @param int $hs_sea
     * @return $this
     */
    public function setHsSea($hs_sea)
    {
        $this->hs_sea = $hs_sea;

        return $this;
    }

    /**
     * @return int
     */
    public function getTpSea8()
    {
        return $this->tp_sea8;
    }

    /**
     * @param int $tp_sea8
     * @return $this
     */
    public function setTpSea8($tp_sea8)
    {
        $this->tp_sea8 = $tp_sea8;

        return $this;
    }

    /**
     * @return int
     */
    public function getTpSea()
    {
        return $this->tp_sea;
    }

    /**
     * @param int $tp_sea
     * @return $this
     */
    public function setTpSea($tp_sea)
    {
        $this->tp_sea = $tp_sea;

        return $this;
    }

    /**
     * @return int
     */
    public function getTmSea()
    {
        return $this->tm_sea;
    }

    /**
     * @param int $tm_sea
     * @return $this
     */
    public function setTmSea($tm_sea)
    {
        $this->tm_sea = $tm_sea;

        return $this;
    }

    /**
     * @return int
     */
    public function getDpmSea8()
    {
        return $this->dpm_sea8;
    }

    /**
     * @param int $dpm_sea8
     * @return $this
     */
    public function setDpmSea8($dpm_sea8)
    {
        $this->dpm_sea8 = $dpm_sea8;

        return $this;
    }

    /**
     * @return int
     */
    public function getDpmSea()
    {
        return $this->dpm_sea;
    }

    /**
     * @param int $dpm_sea
     * @return $this
     */
    public function setDpmSea($dpm_sea)
    {
        $this->dpm_sea = $dpm_sea;

        return $this;
    }

    /**
     * @return int
     */
    public function getHsIg()
    {
        return $this->hs_ig;
    }

    /**
     * @param int $hs_ig
     * @return $this
     */
    public function setHsIg($hs_ig)
    {
        $this->hs_ig = $hs_ig;

        return $this;
    }

    /**
     * @return int
     */
    public function getHsFig()
    {
        return $this->hs_fig;
    }

    /**
     * @param int $hs_fig
     * @return $this
     */
    public function setHsFig($hs_fig)
    {
        $this->hs_fig = $hs_fig;

        return $this;
    }

    /**
     * @return int
     */
    public function getWsp()
    {
        return $this->wsp;
    }

    /**
     * @param int $wsp
     * @return $this
     */
    public function setWsp($wsp)
    {
        $this->wsp = $wsp;

        return $this;
    }

    /**
     * @return int
     */
    public function getGst()
    {
        return $this->gst;
    }

    /**
     * @param int $gst
     * @return $this
     */
    public function setGst($gst)
    {
        $this->gst = $gst;

        return $this;
    }

    /**
     * @return int
     */
    public function getWd()
    {
        return $this->wd;
    }

    /**
     * @param int $wd
     * @return $this
     */
    public function setWd($wd)
    {
        $this->wd = $wd;

        return $this;
    }

    /**
     * @return int
     */
    public function getWsp100()
    {
        return $this->wsp100;
    }

    /**
     * @param int $wsp100
     * @return $this
     */
    public function setWsp100($wsp100)
    {
        $this->wsp100 = $wsp100;

        return $this;
    }

    /**
     * @return int
     */
    public function getWsp50()
    {
        return $this->wsp50;
    }

    /**
     * @param int $wsp50
     * @return $this
     */
    public function setWsp50($wsp50)
    {
        $this->wsp50 = $wsp50;

        return $this;
    }

    /**
     * @return int
     */
    public function getWsp80()
    {
        return $this->wsp80;
    }

    /**
     * @param int $wsp80
     * @return $this
     */
    public function setWsp80($wsp80)
    {
        $this->wsp80 = $wsp80;

        return $this;
    }

    /**
     * @return int
     */
    public function getPrecip()
    {
        return $this->precip;
    }

    /**
     * @param int $precip
     * @return $this
     */
    public function setPrecip($precip)
    {
        $this->precip = $precip;

        return $this;
    }

    /**
     * @return int
     */
    public function getTmp()
    {
        return $this->tmp;
    }

    /**
     * @param int $tmp
     * @return $this
     */
    public function setTmp($tmp)
    {
        $this->tmp = $tmp;

        return $this;
    }

    /**
     * @return int
     */
    public function getRh()
    {
        return $this->rh;
    }

    /**
     * @param int $rh
     * @return $this
     */
    public function setRh($rh)
    {
        $this->rh = $rh;

        return $this;
    }

    /**
     * @return int
     */
    public function getVis()
    {
        return $this->vis;
    }

    /**
     * @param int $vis
     * @return $this
     */
    public function setVis($vis)
    {
        $this->vis = $vis;

        return $this;
    }

    /**
     * @return int
     */
    public function getCld()
    {
        return $this->cld;
    }

    /**
     * @param int $cld
     * @return $this
     */
    public function setCld($cld)
    {
        $this->cld = $cld;

        return $this;
    }

    /**
     * @return int
     */
    public function getCb()
    {
        return $this->cb;
    }

    /**
     * @param int $cb
     * @return $this
     */
    public function setCb($cb)
    {
        $this->cb = $cb;

        return $this;
    }

    /**
     * @return int
     */
    public function getCsp0()
    {
        return $this->csp0;
    }

    /**
     * @param int $csp0
     * @return $this
     */
    public function setCsp0($csp0)
    {
        $this->csp0 = $csp0;

        return $this;
    }

    /**
     * @return int
     */
    public function getCd0()
    {
        return $this->cd0;
    }

    /**
     * @param int $cd0
     * @return $this
     */
    public function setCd0($cd0)
    {
        $this->cd0 = $cd0;

        return $this;
    }

    /**
     * @return int
     */
    public function getSs()
    {
        return $this->ss;
    }

    /**
     * @param int $ss
     * @return $this
     */
    public function setSs($ss)
    {
        $this->ss = $ss;

        return $this;
    }

    /**
     * @return int
     */
    public function getSst()
    {
        return $this->sst;
    }

    /**
     * @param int $sst
     * @return $this
     */
    public function setSst($sst)
    {
        $this->sst = $sst;

        return $this;
    }
}